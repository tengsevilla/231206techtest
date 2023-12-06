import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "./DataTable";
import DataMyLeads from "../../data/DataMyLeads.json";
export type TLead = {
    id: string | number;
    firstname: string;
    lastname: string;
    contactnumber: string;
    leadstatus: string;
    service: string;
    supervisorname: string;
    lastupdated: string;
};
export const InitService: TLead = {
    id: 0,
    firstname: '',
    lastname: '',
    contactnumber: '',
    leadstatus: '',
    service: '',
    supervisorname: '',
    lastupdated: '',
};
const data: TLead[] = DataMyLeads;

export default function DataTableLeads() {
    const columnHelper = createColumnHelper<TLead>();
    const columns = [
        columnHelper.accessor("id", {
            cell: (info) => info.getValue(),
            header: "Client ID",
        }),
        columnHelper.accessor("firstname", {
            cell: (info) => info.getValue(),
            header: "First name",
        }),
        columnHelper.accessor("lastname", {
            cell: (info) => info.getValue(),
            header: "Last name",
        }),
        columnHelper.accessor("contactnumber", {
            cell: (info) => info.getValue(),
            header: "Contact Number",
        }),
        columnHelper.accessor("leadstatus", {
            cell: (info) => info.getValue(),
            header: "Lead Status",
        }),
        columnHelper.accessor("service", {
            cell: (info) => info.getValue(),
            header: "Service",
        }),
        columnHelper.accessor("supervisorname", {
            cell: (info) => info.getValue(),
            header: "Supervisor Name",
        }),
        columnHelper.accessor("lastupdated", {
            cell: (info) => info.getValue(),
            header: "Last Updated",
        }),
    ];

    return (
        <DataTable columns={columns} data={data} />
    );
}
