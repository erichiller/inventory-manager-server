
export interface InsertFileObjectMapEntry {
    // file_id: number;
    object_type: string;
    object_id: number;
}
export interface IFileUploadHeader {
    fileName: String;
    lastModified: number;
    userUuid: String;
    objects: InsertFileObjectMapEntry[];
}