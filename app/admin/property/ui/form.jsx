"use client";
import { Tabs, Tab, Button, DatePicker, Select, SelectItem, } from "@nextui-org/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import Upload from "@/app/ui/upload";
import json from "../dic";
import { useForm, Controller } from "react-hook-form";
import { parseDate, parseAbsoluteToLocal } from "@internationalized/date";

export default function Page() {
    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            startDateTime: parseAbsoluteToLocal("2021-04-07T12:22:22Z")
        },
    });


    const [regionList1, setRegionList1] = useState(json.region);
    const [regionList2, setRegionList2] = useState([]);
    const [regionList3, setRegionList3] = useState([]);
    const [region1, setRegion1] = useState();
    const [region2, setRegion2] = useState();
    const [region3, setRegion3] = useState();

    const [propertyTypeList1, setPropertyTypeList1] = useState(json.propertyType);
    const [propertyTypeList2, setPropertyTypeList2] = useState([]);
    const [propertyType1, setPropertyType1] = useState();
    const [propertyType2, setPropertyType2] = useState();

    const [coverImage, setCoverImage] = useState(null);
    const [otherImages, setOtherImages] = useState(null);
    const [files, setFiles] = useState(null);
    const onSubmit = (data) => {
        const params = { ...data };
        params.startDateTime = data.startDateTime.toAbsoluteString();
        params.completionDateTime = data.completionDateTime.toAbsoluteString();
        params.region = region3;
        params.region1 = region1;
        params.region2 = region2;
        params.region3 = region3;
        params.propertyType = propertyType2 || propertyType1;
        params.propertyType1 = propertyType1;
        params.propertyType2 = propertyType2;
        params.coverImage = coverImage;
        params.otherImages = otherImages;
        params.files = files;
    };
    useEffect(() => {
        if (region1) {
            setRegion2(null);
            const region = regionList1.find(item => {
                return item.value === region1;
            });
            console.log(region);
            setRegionList2(region.children);
        }
    }, [region1, regionList1]);

    useEffect(() => {
        if (region2) {
            setRegion3(null);
            const region = regionList2.find(item => {
                return item.value === region2;
            });
            setRegionList3(region.children);
        }
    }, [region2, regionList2]);

    useEffect(() => {
        if (propertyType1) {
            setPropertyType2(null);
            const propertyType = propertyTypeList1.find(item => {
                return item.value === propertyType1;
            });
            setPropertyTypeList2(propertyType.children || []);
        }
    }, [propertyType1, propertyTypeList1]);
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     // const region = region3;
    //     // const propertyType = propertyType2 || propertyType1;
    // };
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>

                <Tabs className="w-full [&>div]:w-full">
                    <Tab key="TraditionalChines" title="Traditional Chinese">
                        <div className="pb-2">
                            <Label htmlFor="traditionalChineseTitle">Traditional Chinese title</Label>
                            <Input id="traditionalChineseTitle" name="traditionalChineseTitle" {...register("traditionalChineseTitle")} placeholder="Traditional Chinese title" required />
                        </div>
                        <div className="pb-2">
                            <Label htmlFor="traditionalChineseAddress">Traditional Chinese address</Label>
                            <Textarea id="traditionalChineseAddress" name="traditionalChineseAddress" {...register("traditionalChineseAddress")} placeholder="Traditional Chinese address" required />
                        </div>
                        <div className="pb-2">
                            <Label>Broker&apos;s traditional Chinese name</Label>
                            <Input id="BrokerTraditionalChineseName" name="BrokerTraditionalChineseName" {...register("BrokerTraditionalChineseName")} placeholder="Broker&apos;s traditional Chinese name" required />
                        </div>
                        <div className="pb-2">
                            <Label>Traditional Chinese content</Label>
                            <Textarea id="traditionalChineseContent" name="traditionalChineseContent" {...register("traditionalChineseContent")} placeholder="Traditional Chinese content" required />
                        </div>
                        <div className="pb-2">
                            <Label>Traditional Chinese price list</Label>
                            <Textarea id="traditionalChinesePriceList" name="traditionalChinesePriceList" {...register("traditionalChinesePriceList")} placeholder="Traditional Chinese price list" required />
                        </div>
                    </Tab>

                    <Tab key="SimplifiedChinese" title="Simplified Chinese">
                        <div className="pb-2">
                            <Label htmlFor="simplifiedChineseTitle">Simplified Chinese title</Label>
                            <Input id="simplifiedChineseTitle" name="simplifiedChineseTitle" {...register("simplifiedChineseTitle")} placeholder="Simplified Chinese title" required />
                        </div>
                        <div className="pb-2">
                            <Label htmlFor="password">Simplified Chinese address</Label>
                            <Textarea id="simplifiedChineseAddress" name="simplifiedChineseAddress" {...register("simplifiedChineseAddress")} placeholder="Simplified Chinese address" required />
                        </div>
                        <div className="pb-2">
                            <Label>Broker&apos;s simplified Chinese name</Label>
                            <Input id="BrokerSimplifiedChineseName" name="BrokerSimplifiedChineseName" {...register("BrokerSimplifiedChineseName")} placeholder="Broker&apos;s simplified Chinese name" required />
                        </div>

                        <div className="pb-2">
                            <Label>simplified Chinese content</Label>
                            <Textarea id="simplifiedChineseContent" name="simplifiedChineseContent" {...register("simplifiedChineseContent")} placeholder="simplified Chinese content" required />
                        </div>
                        <div className="pb-2">
                            <Label>simplified Chinese price list</Label>
                            <Textarea id="simplifiedChinesePriceList" name="simplifiedChinesePriceList" {...register("simplifiedChinesePriceList")} placeholder="simplified Chinese price list" required />
                        </div>
                    </Tab>

                    <Tab key="English" title="English">
                        <div className="pb-2">
                            <Label htmlFor="englishTitle">English title</Label>
                            <Input id="englishTitle" name="englishTitle" {...register("englishTitle")} placeholder="English title" required />
                        </div>
                        <div className="pb-2">
                            <Label htmlFor="englishAddress">English address</Label>
                            <Textarea id="englishAddress" name="englishAddress" {...register("englishAddress")} placeholder="English address" required />
                        </div>
                        <div className="pb-2">
                            <Label>Broker&apos;s English name</Label>
                            <Input id="brokerEnglishName" name="brokerEnglishName" {...register("brokerEnglishName")} placeholder="Broker&apos;s English name" required />
                        </div>
                        <div className="pb-2">
                            <Label>English content</Label>
                            <Textarea id="englishContent" name="englishContent" {...register("englishContent")} placeholder="English content" required />
                        </div>
                        <div className="pb-2">
                            <Label>English price list</Label>
                            <Textarea id="englishPriceList" name="englishPriceList" {...register("englishPriceList")} placeholder="English price list" required />
                        </div>
                    </Tab>
                </Tabs>

                <div className="pb-2">
                    <Label>Region</Label>
                    <div className=" w-full flex gap-4">
                        <Select isRequired selectedKeys={[region1]} items={regionList1} onChange={e => {
                            setRegion1(e.target.value);
                        }}>
                            {(region) => <SelectItem key={region.value} value={region.value}>{region.label3}</SelectItem>}
                        </Select>
                        <Select isRequired items={regionList2} onChange={e => {
                            setRegion2(e.target.value);
                        }}>
                            {(region) => <SelectItem key={region.value}>{region.label3}</SelectItem>}
                        </Select>
                        <Select isRequired items={regionList3} onChange={e => {
                            setRegion3(e.target.value);
                        }}>
                            {(region) => <SelectItem key={region.value}>{region.label3}</SelectItem>}
                        </Select>
                    </div>
                </div>
                <div className="pb-2">
                    <Label>Property type</Label>
                    <div className=" w-full flex gap-4">
                        <Select isRequired items={propertyTypeList1} onChange={e => {
                            setPropertyType1(e.target.value);
                        }}>
                            {(propertyType) => <SelectItem key={propertyType.value}>{propertyType.label3}</SelectItem>}
                        </Select>

                        <Select isRequired items={propertyTypeList2} onChange={e => {
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
                    {JSON.stringify(coverImage)}
                    <Upload maxFiles={1} onChange={arr => {
                        if (arr) {
                            setCoverImage(arr[0]);
                        } else {
                            setCoverImage(null);
                        }

                    }} />
                </div>
                <div className="pb-2">
                    <Label>Other images</Label>
                    <Upload maxFiles={4} onChange={arr => {
                        setOtherImages(arr);

                    }} />
                </div>
                <div className="pb-2">
                    <Label htmlFor="startDateTime">Start datetime</Label>
                    <Controller
                        name="startDateTime"
                        control={control}
                        render={({ field }) => (
                            <DatePicker hourCycle="24" hideTimeZone id="startDateTime" name="startDateTime" {...field} placeholder="Start dateTime" isRequired></DatePicker>
                        )}
                    />
                </div>
                <div className="pb-2">
                    <Label htmlFor="Completion datetime">Completion datetime</Label>
                    <Controller
                        name="completionDateTime"
                        control={control}
                        render={({ field }) => (
                            <DatePicker hourCycle="24" hideTimeZone id="completionDateTime" name="completionDateTime" {...field} placeholder="Completion dateTime" isRequired></DatePicker>
                        )}
                    />
                </div>
                <div className="pb-2">
                    <Label htmlFor="startingPrice">Starting price</Label>
                    <Input title="only number" pattern="[0-9]*" id="startingPrice" name="startingPrice" {...register("startingPrice")} placeholder="Starting price" required />
                </div>
                <div className="pb-2">
                    <Label htmlFor="bidIncrement">Bid increment</Label>
                    <Input title="only number" pattern="[0-9]*" id="bidIncrement" name="bidIncrement" {...register("startingPrice")} placeholder="Bid increment" required />
                </div>
                <div className="pb-2">
                    <Label htmlFor="evaluationPrice">Evaluation price</Label>
                    <Input title="only number" pattern="[0-9]*" id="evaluationPrice" name="evaluationPrice" {...register("startingPrice")} placeholder="Evaluation price" required />
                </div>
                <div className="pb-2">
                    <Label htmlFor="ReservePrice">Reserve price</Label>
                    <Input title="only number" pattern="[0-9]*" id="reservePrice" name="reservePrice" {...register("startingPrice")} placeholder="Reserve price" required />
                </div>
                <div className="pb-2">
                    <Label>File upload</Label>
                    <Upload maxFiles={4} onChange={arr => {
                        setFiles(arr);

                    }} />
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
                <div className="pb-2">
                    <Label>Construction unitPrice</Label>
                    <Input id="constructionUnitPrice" name="constructionUnitPrice" placeholder="Construction unitPrice" {...register("constructionUnitPrice")} required />
                </div>

                <div className="pb-2">
                    <Label>Practical area</Label>
                    <Input id="practicalArea" name="practicalArea" placeholder="Practical area" {...register("practicalArea")} required />
                </div>
                <div className="pb-2">
                    <Label>Practical unitPrice</Label>
                    <Input id="practicalUnitPrice" name="practicalUnitPrice" placeholder="Practical unitPrice" {...register("practicalUnitPrice")} required />
                </div>
                <div>
                    <Button className="w-full" color="primary" type="submit">Submit</Button>
                </div>
            </form>
        </div>
    )
}