import { Contract } from "@equinor/fusion"
import { RevisionContainerReview } from "./RevisionContainerReview"
import { TagData } from "./TagData"
import { TagDataReview } from "./TagDataReview"

export class Project implements Components.Schemas.ProjectDto {
    id?: string; // uuid
    createdDate?: string; // date-time
    modifiedDate?: string; // date-time
    contracts?: Contract[] | null;

    constructor(init?: Partial<Project>) {
        Object.assign(this, init)
    }
}
