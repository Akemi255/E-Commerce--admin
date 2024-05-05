"use client";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

import { Plus } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { ColorColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/ui/api-list";

interface ColorClientProps {
    data: ColorColumn[]
}

export const ColorsClient: React.FC<ColorClientProps> = ({ data }) => {
    const router = useRouter();
    const params = useParams();
    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Colors (${data.length})`}
                    description="Manage colors for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add New
                </Button>
            </div>

            <DataTable searchKey="name" columns={columns} data={data} />
            <Heading title="API" description="API calls for Colors" />
            <Separator />
            <ApiList entityName="colors" entityIdName="colorId" />
        </>
    )
}