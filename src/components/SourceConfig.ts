/** @class SourceConfig */
import type { ISourceConfig } from "log-object-processor";

export class SourceConfig implements ISourceConfig {
    public type      :string;
    public location  :string;
    public object_id :string;

    constructor ( _type :string, _location :string, object_id :string ) {
        this.type      = _type;
        this.location  = _location; 
        this.object_id = object_id; }
}
