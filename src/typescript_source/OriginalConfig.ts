/*
 * OriginalConfig 
 */
import type { ISourceConfig } from "log-object-processor";

export class OriginalConfig implements ISourceConfig {
    public type      :string;
    public location  :string;
    public object_id :string;

    constructor () {
        this.type      = "url";
        this.location  = "https://localhost:8080";
        this.object_id = "test_id"; }
}
