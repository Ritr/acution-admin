"use client";
import { Tabs, Tab, Button, DatePicker, Select, SelectItem, Textarea, Checkbox } from "@nextui-org/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState, useRef, useLayoutEffect, forwardRef } from "react";
import Upload from "@/app/ui/upload";
import json from "../../../../utils/propertyDic";
import { useForm, Controller } from "react-hook-form";
import { parseDate, parseAbsoluteToLocal } from "@internationalized/date";
import { ToastContainer, toast } from "react-toastify";
import dayjs from "dayjs";

export default function Page({ onOk, defaultProperty, loading }) {
    const [render, setRender] = useState(false);
    const { register, handleSubmit, control, formState, reset, watch } = useForm({
        defaultValues: defaultProperty ? {
            ...defaultProperty,
            startDateTime: defaultProperty.startDateTime ? dayjs(defaultProperty.startDateTime).format("YYYY-MM-DD hh:mm") : undefined,
            completionDateTime: defaultProperty.completionDateTime ? dayjs(defaultProperty.completionDateTime).format("YYYY-MM-DD hh:mm") : undefined,
            postDateTime: defaultProperty.postDateTime ? dayjs(defaultProperty.postDateTime).format("YYYY-MM-DD hh:mm") : undefined,
        } : {},
    });

    const [regionList1, setRegionList1] = useState(json.region);
    const [regionList2, setRegionList2] = useState([]);
    const [regionList3, setRegionList3] = useState([]);
    const [region1, setRegion1] = useState(defaultProperty ? defaultProperty.region1 : undefined);
    const [region2, setRegion2] = useState(defaultProperty ? defaultProperty.region2 : undefined);
    const [region3, setRegion3] = useState(defaultProperty ? defaultProperty.region3 : undefined);

    const [propertyTypeList1, setPropertyTypeList1] = useState(json.propertyType);
    const [propertyTypeList2, setPropertyTypeList2] = useState([]);
    const [propertyType1, setPropertyType1] = useState(defaultProperty ? defaultProperty.propertyType1 : undefined);
    const [propertyType2, setPropertyType2] = useState(defaultProperty ? defaultProperty.propertyType2 : undefined);

    const startDateTime = watch("startDateTime");
    const completionDateTime = watch("completionDateTime");
    const formData = watch();
    useEffect(() => {
        console.log(formData);
    }, [formData]);
    const onSubmit = (data) => {
        const params = { ...data };
        if (!params.coverImage) {
            toast.error("Please upload the cover image");
            return;
        }
        if (!params.traditionalChineseTitle) {
            toast.error("Please enter the content in traditional Chinese");
            return;
        }

        if (!params.simplifiedChineseTitle) {
            toast.error("Please enter the content in simplified Chinese");
            return;
        }

        if (!params.englishTitle) {
            toast.error("Please enter the content in English");
            return;
        }
        if (!params.files && !params.files.length) {
            toast.error("Please upload files");
            return;
        }
        params.region1 = region1;
        params.region2 = region2;
        params.region3 = region3;
        params.region = region3;
        params.propertyType = propertyType2 || propertyType1;
        params.propertyType1 = propertyType1;
        params.propertyType2 = propertyType2;
        delete params._id;
        delete params.__v;
        onOk(params);
    };
    const onSave = () => {
        const params = { ...formData };
        // debugger;
        params.region1 = region1;
        params.region2 = region2;
        params.region3 = region3;
        params.region = region3;
        params.propertyType = propertyType2 || propertyType1;
        params.propertyType1 = propertyType1;
        params.propertyType2 = propertyType2;
        delete params._id;
        delete params.__v;
        onOk(params);
    }
    useEffect(() => {
        if (region1) {
            if (render) {
                setRegion2(undefined);
                setRegionList2([]);
            }
            const region = regionList1.find(item => {
                return item.value === region1;
            });
            if (region) {
                setRegionList2(region.children);
            }
        }
    }, [region1, regionList1]);

    useEffect(() => {
        if (region2) {
            if (render) {
                setRegionList3([]);
                setRegion3(undefined);
            }
            const region = regionList2.find(item => {
                return item.value === region2;
            });
            if (region) {
                setRegionList3(region.children);
            }
        }
    }, [region2, regionList2]);

    useEffect(() => {
        if (propertyType1) {
            if (render) {
                setPropertyType2(undefined);
            }
            const propertyType = propertyTypeList1.find(item => {
                return item.value === propertyType1;
            });
            setPropertyTypeList2(propertyType.children || []);
        }
    }, [propertyType1, propertyTypeList1]);
    useLayoutEffect(() => {
        setTimeout(() => {
            setRender(true);
        }, 1000);
    }, []);
    return (
        <div className="py-6">
            <ToastContainer autoClose={2000} position="top-center" />
            {/* {JSON.stringify(defaultProperty)} */}
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <Tabs className="w-full [&>div]:w-full">
                    <Tab key="TraditionalChines" title="Traditional Chinese">
                        <div className="pb-2">
                            <Label htmlFor="traditionalChineseTitle">Traditional Chinese title</Label>
                            <Input id="traditionalChineseTitle" name="traditionalChineseTitle" {...register("traditionalChineseTitle")} placeholder="Traditional Chinese title" required />
                        </div>
                        <div className="pb-2">
                            <Label htmlFor="traditionalChineseAddress">Traditional Chinese address</Label>
                            <Textarea classNames={{ input: "resize-y" }} variant="bordered" minRows={5} id="traditionalChineseAddress" name="traditionalChineseAddress" {...register("traditionalChineseAddress")} placeholder="Traditional Chinese address" required />
                        </div>
                        <div className="pb-2">
                            <Label>Traditional Chinese content</Label>
                            <Textarea classNames={{ input: "resize-y" }} variant="bordered" minRows={5} id="traditionalChineseContent" name="traditionalChineseContent" {...register("traditionalChineseContent")} placeholder="Traditional Chinese content" required />
                        </div>
                        <div className="pb-2">
                            <Label>Traditional Chinese price list</Label>
                            <Textarea classNames={{ input: "resize-y" }} variant="bordered" minRows={5} id="traditionalChinesePriceList" name="traditionalChinesePriceList" {...register("traditionalChinesePriceList")} placeholder="Traditional Chinese price list" required />
                        </div>
                    </Tab>

                    <Tab key="SimplifiedChinese" title="Simplified Chinese">
                        <div className="pb-2">
                            <Label htmlFor="simplifiedChineseTitle">Simplified Chinese title</Label>
                            <Input id="simplifiedChineseTitle" name="simplifiedChineseTitle" {...register("simplifiedChineseTitle")} placeholder="Simplified Chinese title" required />
                        </div>
                        <div className="pb-2">
                            <Label htmlFor="password">Simplified Chinese address</Label>
                            <Textarea classNames={{ input: "resize-y" }} variant="bordered" minRows={5} id="simplifiedChineseAddress" name="simplifiedChineseAddress" {...register("simplifiedChineseAddress")} placeholder="Simplified Chinese address" required />
                        </div>
                        <div className="pb-2">
                            <Label>simplified Chinese content</Label>
                            <Textarea classNames={{ input: "resize-y" }} variant="bordered" minRows={5} id="simplifiedChineseContent" name="simplifiedChineseContent" {...register("simplifiedChineseContent")} placeholder="simplified Chinese content" required />
                        </div>
                        <div className="pb-2">
                            <Label>simplified Chinese price list</Label>
                            <Textarea classNames={{ input: "resize-y" }} variant="bordered" minRows={5} id="simplifiedChinesePriceList" name="simplifiedChinesePriceList" {...register("simplifiedChinesePriceList")} placeholder="simplified Chinese price list" required />
                        </div>
                    </Tab>

                    <Tab key="English" title="English">
                        <div className="pb-2">
                            <Label htmlFor="englishTitle">English title</Label>
                            <Input id="englishTitle" name="englishTitle" {...register("englishTitle")} placeholder="English title" required />
                        </div>
                        <div className="pb-2">
                            <Label htmlFor="englishAddress">English address</Label>
                            <Textarea classNames={{ input: "resize-y" }} variant="bordered" minRows={5} id="englishAddress" name="englishAddress" {...register("englishAddress")} placeholder="English address" required />
                        </div>
                        <div className="pb-2">
                            <Label>English content</Label>
                            <Textarea classNames={{ input: "resize-y" }} variant="bordered" minRows={5} id="englishContent" name="englishContent" {...register("englishContent")} placeholder="English content" required />
                        </div>
                        <div className="pb-2">
                            <Label>English price list</Label>
                            <Textarea classNames={{ input: "resize-y" }} variant="bordered" minRows={5} id="englishPriceList" name="englishPriceList" {...register("englishPriceList")} placeholder="English price list" required />
                        </div>
                    </Tab>
                </Tabs>

                <div className="pb-2">
                    <Label>Region</Label>
                    <div className=" w-full flex gap-4">
                        <Select isRequired defaultSelectedKeys={[region1]} items={regionList1} onChange={e => {
                            setRegion1(e.target.value);
                        }}>
                            {(region) => <SelectItem key={region.value} value={region.value}>{region.label3}</SelectItem>}
                        </Select>
                        <Select isRequired defaultSelectedKeys={[region2]} items={regionList2} onChange={e => {
                            setRegion2(e.target.value);
                        }}>
                            {(region) => <SelectItem key={region.value}>{region.label3}</SelectItem>}
                        </Select>
                        <Select isRequired defaultSelectedKeys={[region3]} items={regionList3} onChange={e => {
                            setRegion3(e.target.value);
                        }}>
                            {(region) => <SelectItem key={region.value}>{region.label3}</SelectItem>}
                        </Select>
                    </div>
                </div>
                <div className="pb-2">
                    <Label>Property type</Label>
                    <div className=" w-full flex gap-4">
                        <Select isRequired items={propertyTypeList1} defaultSelectedKeys={[propertyType1]} onChange={e => {
                            setPropertyType1(e.target.value);
                        }}>
                            {(propertyType) => <SelectItem key={propertyType.value}>{propertyType.label3}</SelectItem>}
                        </Select>

                        <Select isRequired items={propertyTypeList2} defaultSelectedKeys={[propertyType2]} onChange={e => {
                            setPropertyType2(e.target.value);
                        }}>
                            {(propertyType) => <SelectItem key={propertyType.value}>{propertyType.label3}</SelectItem>}
                        </Select>
                    </div>
                </div>

                <div className="pb-2">
                    <Label>Land use</Label>
                    <Select isRequired name="landUse" items={json.landUse} {...register("landUse")}>
                        {(item => <SelectItem key={item.value}>{item.label3}</SelectItem>)}
                    </Select>
                </div>
                <div className="pb-2">
                    <Label>Owner ship status</Label>
                    <Select isRequired name="ownershipStatus" items={json.ownershipStatus} {...register("ownershipStatus")}>
                        {(item => <SelectItem key={item.value}>{item.label3}</SelectItem>)}
                    </Select>
                </div>
                <div className="pb-2">
                    <Label>Property status</Label>
                    <Select isRequired name="propertyStatus" items={json.propertyStatus} {...register("propertyStatus")}>
                        {(item => <SelectItem key={item.value}>{item.label3}</SelectItem>)}
                    </Select>
                </div>
                <div className="pb-2">
                    <Label>AuctionNature</Label>
                    <Select isRequired name="auctionNature" items={json.auctionNature} {...register("auctionNature")}>
                        {(item => <SelectItem key={item.value}>{item.label3}</SelectItem>)}
                    </Select>
                </div>
                <div className="pb-2">
                    <Label>Status</Label>
                    <Select isRequired name="status" items={json.status} {...register("status")}>
                        {(item => <SelectItem key={item.value}>{item.label3}</SelectItem>)}
                    </Select>
                </div>
                <div className="pb-2">
                    <Label>Cover image</Label>

                    <Controller
                        name="coverImage"
                        control={control}
                        render={({ field }) => (
                            <Upload
                                maxFiles={1}
                                {...field}
                                defaultValue={formState.defaultValues.coverImage ? [formState.defaultValues.coverImage] : undefined}
                                onChange={(arr) => field.onChange(arr ? arr[0] : undefined)}
                            >
                            </Upload>
                        )}>

                    </Controller>
                </div>
                <div className="pb-2">
                    <Label>Other images</Label>
                    <Controller
                        name="otherImages"
                        control={control}
                        render={({ field }) => (
                            <Upload maxFiles={4} {...field} defaultValue={formState.defaultValues.otherImages ? formState.defaultValues.otherImages : undefined} />
                        )}>

                    </Controller>

                </div>
                <div className="pb-2">
                    <Label htmlFor="startDateTime">Start datetime</Label>
                    <Input type="datetime-local" max={completionDateTime ? dayjs(completionDateTime).add(-1, 'day').format("YYYY-MM-DD HH:mm:ss") : undefined} {...register("startDateTime")} required></Input>
                </div>
                <div className="pb-2">
                    <Label htmlFor="Completion datetime">Completion datetime</Label>
                    <Input type="datetime-local" min={startDateTime ? dayjs(startDateTime).add(1, 'day').format("YYYY-MM-DD HH:mm:ss") : undefined}  {...register("completionDateTime")} required></Input>
                </div>
                <div className="pb-2">
                    <Label htmlFor="startingPrice">Starting price</Label>
                    <Input title="only number" pattern="[0-9]*" id="startingPrice" name="startingPrice" {...register("startingPrice")} placeholder="Starting price" required />
                </div>
                <div className="pb-2">
                    <Label htmlFor="bidIncrement">Bid increment</Label>
                    <Input title="only number" pattern="[0-9]*" id="bidIncrement" name="bidIncrement" {...register("bidIncrement")} placeholder="Bid increment" required />
                </div>
                <div className="pb-2">
                    <Label htmlFor="evaluationPrice">Evaluation price</Label>
                    <Input title="only number" pattern="[0-9]*" id="evaluationPrice" name="evaluationPrice" {...register("evaluationPrice")} placeholder="Evaluation price" required />
                </div>
                <div className="pb-2">
                    <Label htmlFor="ReservePrice">Reserve price</Label>
                    <Input title="only number" pattern="[0-9]*" id="reservePrice" name="reservePrice" {...register("reservePrice")} placeholder="Reserve price" required />
                </div>
                <div className="pb-2">
                    <Label>File upload</Label>
                    <Controller
                        name="files"
                        control={control}
                        render={({ field }) => (
                            <Upload accept="image/*,.pdf" maxFiles={4} {...field} defaultValue={formState.defaultValues.files ? formState.defaultValues.files : undefined} />
                        )}>
                    </Controller>
                </div>

                <div className="pb-2">
                    <Label>Broker&apos;s traditional Chinese name</Label>
                    <Input id="brokerTraditionalChineseName" name="brokerTraditionalChineseName" {...register("brokerTraditionalChineseName")} placeholder="Broker&apos;s traditional Chinese name" />
                </div>
                <div className="pb-2">
                    <Label>Broker&apos;s simplified Chinese name</Label>
                    <Input id="BrokerSimplifiedChineseName" name="BrokerSimplifiedChineseName" {...register("BrokerSimplifiedChineseName")} placeholder="Broker&apos;s simplified Chinese name" />
                </div>
                <div className="pb-2">
                    <Label>Broker&apos;s English name</Label>
                    <Input id="brokerEnglishName" name="brokerEnglishName" {...register("brokerEnglishName")} placeholder="Broker&apos;s English name" />
                </div>
                <div className="pb-2">
                    <Label>Broker&apos;s  phone number</Label>
                    <Input title="only number" pattern="[0-9]*" id="brokerPhoneNumber" name="brokerPhoneNumber" {...register("brokerPhoneNumber")} placeholder="Broker&apos;s  phone number" />
                </div>
                <div className="pb-2">
                    <Label>Broker&apos;s email</Label>
                    <Input type="email" id="brokerEmail" name="brokerEmail" placeholder="Broker&apos;s email" {...register("brokerEmail")} />
                </div>
                <div className="pb-2">
                    <Label>Broker&apos;s WeChat</Label>
                    <Input id="brokerWeChat" name="brokerWeChat" placeholder="Broker&apos;s WeChat" {...register("brokerWeChat")} />
                </div>
                <div className="pb-2">
                    <Label>Gross Floor Area (Sqft)</Label>
                    <Input id="constructionArea" title="only number" pattern="^(?!0\d)\d*(?:\.\d+)?$" name="constructionArea" placeholder="Gross Floor Area" {...register("constructionArea")} required />
                </div>
                <div className="pb-2">
                    <Label>Saleable area (Sqft)</Label>
                    <Input id="practicalArea" title="only number" pattern="^(?!0\d)\d*(?:\.\d+)?$" name="practicalArea" placeholder="Saleable area" {...register("practicalArea")} required />
                </div>

                <div className="pb-2">
                    <Label htmlFor="post">Post website</Label>
                    <div className="flex gap-2 items-center">
                        <Checkbox {...register("post")} >will post property to website</Checkbox>
                    </div>
                </div>
                <div className="pb-2">
                    <Label htmlFor="postDateTime">Post datetime</Label>
                    <Input type="datetime-local" {...register("postDateTime")} required></Input>
                </div>
                <div>
                    {
                        formData.post ?
                            <Button className="w-full" color="primary" type="submit" isLoading={loading}>Save And Post Website</Button> :
                            <Button className="w-full" color="secondary" isLoading={loading} onClick={onSave}>Save</Button>
                    }
                </div>
            </form>
        </div>
    )
}