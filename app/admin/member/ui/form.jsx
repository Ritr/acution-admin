"use client";
import { Label } from "@/components/ui/label";
import { Button, Textarea, Checkbox } from "@nextui-org/react";
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
import Upload from "@/app/ui/upload";

export default function Page({ defaultMember = { password: "999999" }, submit, loading }) {
    const { register, handleSubmit, control, watch, formState } = useForm({
        defaultValues: {
            ...defaultMember
        },
    });
    const onSubmit = (data) => {
        let code = null;
        codeList.find((item) => {
            if (item.en === data.countryAndRegion) {
                code = item.code;
            }
        });
        submit({
            ...data,
            code
        });
    };
    const idCardStatus = watch("idCardStatus");
    const addressProofStatus = watch("addressProofStatus");
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
                    <div className="flex gap-2 items-center">
                        <Checkbox {...register("promotion")} >we will send you the latest message</Checkbox>
                    </div>
                </div>
                <div className="pb-2">
                    <Label>idCard</Label>
                    <Controller
                        name="idCard"
                        control={control}
                        render={({ field }) => (
                            <Upload maxFiles={4} {...field} defaultValue={formState.defaultValues.idCard ? formState.defaultValues.idCard : undefined} />
                        )}>

                    </Controller>

                </div>
                <div className="pb-2">
                    <Label htmlFor="promotion">idCard status</Label>
                    <Controller
                        control={control}
                        name="idCardStatus"
                        render={({ field }) => (
                            <Select {...field} onValueChange={field.onChange} required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="0">To be submitted</SelectItem>
                                    <SelectItem value="1">To be Approved</SelectItem>
                                    <SelectItem value="2">Approved</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    >
                    </Controller>
                </div>
                <div className="pb-2">
                    <Label>Address proof</Label>
                    <Controller
                        name="addressProof"
                        control={control}
                        render={({ field }) => (
                            <Upload maxFiles={4} {...field} defaultValue={formState.defaultValues.addressProof ? formState.defaultValues.addressProof : undefined} />
                        )}>

                    </Controller>
                </div>
                <div className="pb-2">
                    <Label>Address proof status</Label>
                    <Controller
                        control={control}
                        name="addressProofStatus"
                        render={({ field }) => (
                            <Select {...field} onValueChange={field.onChange} required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="0">To be submitted</SelectItem>
                                    <SelectItem value="1">To be Approved</SelectItem>
                                    <SelectItem value="2">Approved</SelectItem>
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
                                    <SelectItem disabled={idCardStatus !== "2" || addressProofStatus !== "2"} value="1">Activated</SelectItem>
                                    <SelectItem value="0">Deactivated</SelectItem>
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