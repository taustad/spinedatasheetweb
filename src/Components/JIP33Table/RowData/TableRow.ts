import { ColorLegendEnum } from "../JIP33ColorLegendEnums"

export class TableRow {
    refClause?: string
    description?: string
    purchaserReq?: string | number | null | boolean
    purchaserReqColor?: ColorLegendEnum
    purchaserReqUOM?: string
    purchaserReqUOMColor?: ColorLegendEnum
    supplierOfferedVal?: string | number | null | boolean
    supplierOfferedValColor?: ColorLegendEnum
    supplierOfferedValUOM?: string
    supplierOfferedValUOMColor?: ColorLegendEnum
    additionalNotes?: string
    property?: string | null

    constructor(init?: Partial<TableRow>) {
        Object.assign(this, init)
    }
}
