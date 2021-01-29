import { AnchorId, Face, Orientation, AnchorOptions, AnchorComputeParams } from "../factory/anchor-factory";
import { Anchor } from "./anchor";
import { Dictionary } from '../common';
import { JsPlumbInstance } from "../core";
import { Endpoint } from "../endpoint/endpoint";
import { AnchorPlacement } from "../router/router";
export interface ContinuousAnchorOptions extends AnchorOptions {
    faces?: Array<Face>;
    clockwise?: boolean;
}
export declare type FACE_MAP = Dictionary<boolean>;
export declare class ContinuousAnchor extends Anchor {
    instance: JsPlumbInstance;
    static continuousAnchorType: AnchorId;
    type: AnchorId;
    isDynamic: boolean;
    isContinuous: boolean;
    private clockwise;
    private faces;
    private secondBest;
    private lastChoice;
    private _currentFace;
    private _lockedFace;
    private _lockedAxis;
    private availableFaces;
    constructor(instance: JsPlumbInstance, anchorParams: ContinuousAnchorOptions);
    getDefaultFace(): Face;
    verifyEdge(edge: Face): Face;
    isEdgeSupported(edge: Face): boolean;
    setCurrentFace(face: Face, overrideLock?: boolean): void;
    getCurrentFace(): Face;
    getSupportedFaces(): Array<Face>;
    lock(): void;
    unlock(): void;
    lockCurrentAxis(): void;
    unlockCurrentAxis(): void;
    compute(params: AnchorComputeParams): AnchorPlacement;
    getCurrentLocation(params: AnchorComputeParams): AnchorPlacement;
    getOrientation(endpoint?: Endpoint): Orientation;
    getCssClass(): string;
}
