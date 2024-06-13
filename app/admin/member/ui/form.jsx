"use client";
import { Label } from "@/components/ui/label";
import { Button, Textarea } from "@nextui-org/react";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import codeList from "@/utils/code";

export default function Page({ defaultMember = { password: "999999" }, submit, loading }) {
    const { register, handleSubmit, control, watch, formState } = useForm({
        defaultValues: {
            ...defaultMember,
            promotion: defaultMember.promotion ? "1" : "0"
        },
    });
    const onSubmit = (data) => {
        let code = null;
        codeList.find((item) => {
            if (item.en === data.countryAndRegion) {
                code = item.code;
            }
        });
        data.promotion = data.promotion === "1" ? true : false;
        submit({
            ...data,
            code
        });
    };

    return (
        <div className="pt-6">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="pb-2">
                    <Label>Email</Label>
                    <Input type="email" {...register("email")} placeholder="Email" required />
                </div>
                <div className="pb-2">
                    <Label>Password</Label>
                    <Input {...register("password")} placeholder="Password" required />
                </div>
                <div className="pb-2">
                    <Label htmlFor="englishName">English name</Label>
                    <Input {...register("englishName")} placeholder="English name" required />
                </div>
                <div className="pb-2">
                    <Label htmlFor="englishSurname">English surname</Label>
                    <Input {...register("englishSurname")} placeholder="English surname" required />
                </div>
                <div className="pb-2">
                    <Label htmlFor="chineseName">Chinese name</Label>
                    <Input {...register("chineseName")} placeholder="Chinese name" required />
                </div>
                <div className="pb-2">
                    <Label htmlFor="chineseSurname">Chinese surname</Label>
                    <Input {...register("chineseSurname")} placeholder="Chinese surname" required />
                </div>
                <div className="pb-2">
                    <Label htmlFor="phone">Phone</Label>
                    <div className="flex gap-4">
                        <Controller
                            control={control}
                            name="countryAndRegion"
                            render={({ field }) => (
                                <Select {...field} onValueChange={field.onChange} required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select countryAndRegion code" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            codeList.map((item, index) => {
                                                return (
                                                    <SelectItem key={index} value={item.en}>{item.en}{item.code}</SelectItem>
                                                )
                                            })
                                        }
                                    </SelectContent>
                                </Select>
                            )}
                        >
                        </Controller>
                        <Input
                            {...register("phone")}
                            id="phone"
                            name="phone"
                            placeholder=""
                            required
                            pattern="[0-9]*"
                        />
                    </div>
                </div>
                <div className="pb-2">
                    <Label htmlFor="promotion">Promotion recevial</Label>
                    <Controller
                        control={control}
                        name="promotion"
                        render={({ field }) => (
                            <Select {...field} onValueChange={field.onChange} required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Promotion recevial" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Yes</SelectItem>
                                    <SelectItem value="0">No</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    >
                    </Controller>
                </div>
                <div className="pb-2">
                    <Label htmlFor="status">Status</Label>
                    <Controller
                        control={control}
                        name="status"
                        render={({ field }) => (
                            <Select {...field} onValueChange={field.onChange} required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Activated">Activated</SelectItem>
                                    <SelectItem value="Deactivated">Deactivated</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    >
                    </Controller>
                </div>
                <div className="pb-2">
                    <Label htmlFor="reasonForBanning">Reason for banning</Label>
                    <Textarea classNames={{ input: "resize-y" }} variant="bordered" minRows={5}  {...register("reasonForBanning")} placeholder="Reason for banning" defaultValue={defaultMember.reasonForBanning}></Textarea>
                </div>

                <div>
                    <Button className="w-full" color="primary" type="submit" loading={loading} >Submit</Button>
                </div>
            </form >
        </div >
    )
}