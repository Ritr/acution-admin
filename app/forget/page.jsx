// import { cookies } from "next/headers";
"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { Input, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

export default function RegisterPage() {
    const { register, handleSubmit, formState, watch, reset } = useForm();
    const [codeId, setCodeId] = useState(null);
    const [seconds, setSeconds] = useState(61);
    const [timer, setTimer] = useState(null);
    const email = watch("email");
    // 重置密码
    const mutation = useMutation({
        mutationFn: (data) => {
            return fetch("/api/password", {
                method: "POST",
                body: JSON.stringify(data),
            });
        },
    });
    // 获取验证码
    const codeMutation = useMutation({
        mutationFn: (email) => {
            return fetch("/api/validate?email=" + email);
        },
    });
    const onSubmit = (data) => {
        const password = data.password;
        const password2 = data.password2;
        if (password !== password2) {
            toast.warn("password not equals");
            return;
        }
        mutation.mutate({
            password: password,
            codeId: codeId,
            code: data.code,
            email: data.email,
        });

    };
    const count = () => {
        let timer1 = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
        setTimer(timer1);
    };
    const getCode = () => {
        if (!email) {
            toast.error("Please input email");
            return;
        }
        codeMutation.mutate(email);
        setSeconds(60);
        count();
    }
    useEffect(() => {
        if (codeMutation.isSuccess && codeMutation.data.ok) {
            codeMutation.data.json().then((res) => {
                if (!res.error) {
                    setCodeId(res.codeId);
                } else {
                    toast.error(res.error);
                }
            });
        }
        if (codeMutation.isError) {
            toast.error(codeMutation.data);
        }
    }, [codeMutation.isPending, codeMutation.isSuccess, codeMutation.isError, codeMutation.data]);

    useEffect(() => {
        if (mutation.isSuccess && mutation.data.ok) {
            mutation.data.json().then((res) => {
                if (!res.error) {
                    toast.success(res.msg);
                    setTimeout(() => {
                        location.replace("/login");
                    }, 2000);
                } else {
                    toast.error(res.error);
                }
            });
        }
        if (mutation.isError) {
            toast.error(mutation.data);
        }
    }, [mutation.isPending, mutation.isSuccess, mutation.isError, mutation.data]);
    useEffect(() => {
        if (seconds < 0) {
            clearInterval(timer);
            setSeconds(61);
        }
    }, [seconds]);
    return (
        <main className="flex items-center justify-center md:h-screen">
            <ToastContainer position="top-center" />
            <div className=" mx-auto flex w-full max-w-[600px] flex-col space-y-2.5 p-4 md:-mt-32">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-60">
                    <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                        <h1 className={`text-2xl mb-12`}>
                            Forget Password
                        </h1>
                        <Input {...register("email")} className="w-full mb-6" labelPlacement="outside" placeholder="Please input email" variant="bordered" type="email" label="Email" isRequired>

                        </Input>
                        <div className="flex gap-4  mb-12">
                            <Input {...register("code")} className="w-full flex" labelPlacement="outside" placeholder="Please input verification code" variant="bordered" label="Verification Code" isRequired>
                            </Input>
                            <div className="mt-6">
                                {
                                    seconds <= 60 ? (
                                        <Button color="primary" disabled>{seconds} S</Button>

                                    ) : (
                                        <Button color="primary" onClick={getCode}>Get verification code</Button>
                                    )
                                }
                            </div>
                        </div>
                        <Input {...register("password")} {...register("password")} className="w-full mb-12" minLength={6} labelPlacement="outside" placeholder="Please input password" variant="bordered" label="Password" isRequired>
                        </Input>
                        <Input {...register("password2")} {...register("password2")} className="w-full mb-12" minLength={6} labelPlacement="outside" placeholder="Please input password" variant="bordered" label="Confirm password" isRequired>
                        </Input>
                        <Button type="submit" color="primary" className="w-full" isLoading={mutation.isPending}>
                            Reset Password
                        </Button>
                    </div>
                </form>
            </div>
        </main>
    );
}