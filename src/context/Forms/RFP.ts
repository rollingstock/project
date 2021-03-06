import { IRFP } from "../Models/RFP";
import { RFPStatus } from "../Models/Enums";
// TODO: add searchable interface

export function RFP(data: any): IRFP {
    return {
        rfpTitle: "",
        requestMessage: "",
        buyer: data.organizationId,
        bidders: data.suppliers.map((s: any) => s.id),
        status: RFPStatus.Draft,
        bidAwardedTo: null,
        messages: [], // TODO: messages interface
        createdBy: data.userId,
        proposalDueBy: null,
        cbcRequired: false,
        dateCreated: new Date(),
        dateUpdated: new Date(),
        dateClosed: null,
    }
}