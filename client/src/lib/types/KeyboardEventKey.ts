
/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values}
 */
export enum KeyboardEventKey {
    /** Enter Key */
    Enter = "Enter",
    Tab = "Tab",
    /** Spacebar */
    Spacebar = " "
}


// type NativeKeyboardEvent = KeyboardEvent;

// import React from "react";
// import { KeyboardEvent } from "lib";

// declare module 'react' {

// export type AugmentedKeyboardEvent = Omit<KeyboardEvent, 'key'> & { key: KeyboardEventKey; };
// export interface AugmentedKeyboardEvent extends Omit<React.KeyboardEvent<HTMLFormElement>, 'key'> {
//     key: KeyboardEventKey; 
// }
// export interface AugmentedKeyboardEvent extends KeyboardEvent {
/**
 * https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html
 */
// declare global {
// interface KeyboardEvent {
// export interface KeyboardEvent extends Omit<NativeKeyboardEvent, 'key'> {
// key: KeyboardEventKey;
// }
    
// type NativeKeyboardEvent = KeyboardEvent;
/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values}
 */
// export type KeyboardEventKey = 'Enter' | 'Tab';
// }

// export interface AugmentedReactKeyboardEvent extends React.SyntheticEvent<HTMLFormElement, AugmentedKeyboardEvent> { 
//     key: KeyboardEventKey; 
// }

// }