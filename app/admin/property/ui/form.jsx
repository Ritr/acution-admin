"use client";
import { Tabs, Tab, Button, DatePicker, Select, SelectItem, Textarea } from "@nextui-org/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import Upload from "@/app/ui/upload";
import json from "../../../../utils/propertyDic";
import { useForm, Controller } from "react-hook-form";
import { parseDate, parseAbsoluteToLocal } from "@internationalized/date";

export default function Page({ onOk, defaultProperty, loading }) {
    const [render, setRender] = useState(false);
    const { register, handleSubmit, control, formState, reset, watch } = useForm({
        defaultValues: defaultProperty ? {
            ...defaultProperty,
            startDateTime: parseAbsoluteToLocal(defaultProperty.startDateTime),
            completionDateTime: parseAbsoluteToLocal(defaultProperty.completionDateTime),
        } : {},
    });

    const [regionList1, setRegionList1] = useState(json.region);
    const [regionList2, setRegionList2] = useState([]);
    const [regionList3, setRegionList3] = useState([]);
    const [region1, setRegion1] = useState(defaultProperty ? defaultProperty.region1 : null);
    const [region2, setRegion2] = useState(defaultProperty ? defaultProperty.region2 : null);
    const [region3, setRegion3] = useState(defaultProperty ? defaultProperty.region3 : null);

    const [propertyTypeList1, setPropertyTypeList1] = useState(json.propertyType);
    const [propertyTypeList2, setPropertyTypeList2] = useState([]);
    const [propertyType1, setPropertyType1] = useState(defaultProperty ? defaultProperty.propertyType1 : null);
    const [propertyType2, setPropertyType2] = useState(defaultProperty ? defaultProperty.propertyType2 : null);

    const onSubmit = (data) => {
        const params = { ...data };
        params.startDateTime = data.startDateTime.toDate().toISOString();
        params.completionDateTime = data.completionDateTime.toDate().toISOString();
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
    };
    useEffect(() => {
        if (region1) {
            if (render) {
                setRegion2(null);
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
                setRegion3(null);
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
                setPropertyType2(null);
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
        <div>
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
                                defaultValue={formState.defaultValues.coverImage ? [formState.defaultValues.coverImage] : null}
                                onChange={(arr) => field.onChange(arr ? arr[0] : null)}>
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
                            <Upload maxFiles={4} {...field} defaultValue={formState.defaultValues.otherImages ? formState.defaultValues.otherImages : null} />
                        )}>

                    </Controller>

                </div>
                <div className="pb-2">
                    <Label htmlFor="startDateTime">Start datetime</Label>
                    <Controller
                        name="startDateTime"
                        control={control}
                        render={({ field }) => (
                            <DatePicker granularity="minute" hourCycle="24" hideTimeZone id="startDateTime" name="startDateTime" {...field} placeholder="Start dateTime" isRequired></DatePicker>
                        )}
                    />
                </div>
                <div className="pb-2">
                    <Label htmlFor="Completion datetime">Completion datetime</Label>
                    <Controller
                        name="completionDateTime"
                        control={control}
                        render={({ field }) => (
                            <DatePicker granularity="minute" hourCycle="24" hideTimeZone id="completionDateTime" name="completionDateTime" {...field} placeholder="Completion dateTime" isRequired></DatePicker>
                        )}
                    />
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
                            <Upload accept="image/*,.pdf" maxFiles={4} {...field} defaultValue={formState.defaultValues.files ? formState.defaultValues.files : null} />
                        )}>
                    </Controller>
                </div>

                <div className="pb-2">
                    <Label>Broker&apos;s traditional Chinese name</Label>
                    <Input id="brokerTraditionalChineseName" name="brokerTraditionalChineseName" {...register("brokerTraditionalChineseName")} placeholder="Broker&apos;s traditional Chinese name" required />
                </div>
                <div className="pb-2">
                    <Label>Broker&apos;s simplified Chinese name</Label>
                    <Input id="BrokerSimplifiedChineseName" name="BrokerSimplifiedChineseName" {...register("BrokerSimplifiedChineseName")} placeholder="Broker&apos;s simplified Chinese name" required />
                </div>
                <div className="pb-2">
                    <Label>Broker&apos;s English name</Label>
                    <Input id="brokerEnglishName" name="brokerEnglishName" {...register("brokerEnglishName")} placeholder="Broker&apos;s English name" required />
                </div>
                <div className="pb-2">
                    <Label>Broker&apos;s  phone number</Label>
                    <Input title="only number" pattern="[0-9]*" id="brokerPhoneNumber" name="brokerPhoneNumber" {...register("brokerPhoneNumber")} placeholder="Broker&apos;s  phone number" required />
                </div>
                <div className="pb-2">
                    <Label>Broker&apos;s email</Label>
                    <Input type="email" id="brokerEmail" name="brokerEmail" placeholder="Broker&apos;s email" {...register("brokerEmail")} required />
                </div>
                <div className="pb-2">
                    <Label>Broker&apos;s WeChat</Label>
                    <Input id="brokerWeChat" name="brokerWeChat" placeholder="Broker&apos;s WeChat" {...register("brokerWeChat")} required />
                </div>
                <div className="pb-2">
                    <Label>Construction area</Label>
                    <Input id="constructionArea" name="constructionArea" placeholder="Construction area" {...register("constructionArea")} required />
                </div>
                {/* <div className="pb-2">
                    <Label>Construction unitPrice</Label>
                    <Input id="constructionUnitPrice" name="constructionUnitPrice" placeholder="Construction unitPrice" {...register("constructionUnitPrice")} required />
                </div> */}

                <div className="pb-2">
                    <Label>Practical area</Label>
                    <Input id="practicalArea" name="practicalArea" placeholder="Practical area" {...register("practicalArea")} required />
                </div>
                {/* <div className="pb-2">
                    <Label>Practical unitPrice</Label>
                    <Input id="practicalUnitPrice" name="practicalUnitPrice" placeholder="Practical unitPrice" {...register("practicalUnitPrice")} required />
                </div> */}
                <div>
                    <Button className="w-full" color="primary" type="submit" loading={loading}>Submit</Button>
                </div>
            </form>
        </div>
    )
}