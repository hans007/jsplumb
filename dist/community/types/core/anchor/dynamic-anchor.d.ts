import { Anchor } from "./anchor";
import { AnchorComputeParams, AnchorOptions, Orientation } from "../factory/anchor-factory";
import { PointArray } from '../common';
import { JsPlumbInstance } from "../core";
import { Endpoint } from "../endpoint/endpoint";
import { AnchorPlacement } from "../router/router";
export interface DynamicAnchorOptions extends AnchorOptions {
    selector?: (xy: PointArray, wh: PointArray, txy: PointArray, twh: PointArray, rotation: number, targetRotation: number, anchors: Array<Anchor>) => Anchor;
    elementId?: string;
    anchors: Array<Anchor>;
}
export declare class DynamicAnchor extends Anchor {
    instance: JsPlumbInstance;
    anchors: Array<Anchor>;
    private _curAnchor;
    private _lastAnchor;
    private _anchorSelector;
    constructor(instance: JsPlumbInstance, options: DynamicAnchorOptions);
    getAnchors(): Array<Anchor>;
    compute(params: AnchorComputeParams): AnchorPlacement;
    getCurrentLocation(params: AnchorComputeParams): AnchorPlacement;
    getOrientation(_endpoint?: Endpoint): Orientation;
    over(anchor: Anchor, endpoint: Endpoint): void;
    out(): void;
    setAnchor(a: Anchor): void;
    getCssClass(): string;
    setAnchorCoordinates(coords: PointArray): boolean;
}
