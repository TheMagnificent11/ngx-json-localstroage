# NgxJsonLocalstorage

An Angular 7 implementation of JavaScript local storage that sets/gets values as JSON instead of pure strings.

## Build Status
[![Build status](https://saji.visualstudio.com/Open%20Source/_apis/build/status/NgxJsonLocalStorage)](https://saji.visualstudio.com/Open%20Source/_build/latest?definitionId=27)

## Usage

1. Import `NgxJsonLocalstorageModule` into your application's module.
2. Import `LocalStorageService` as a dependency into your Angular component or provider
3. Set an item in local storage using the generic setter method, specificying the TypeScript type "T" for JSON serialization using `setItem<T>('storage-key', storageTypeScriptObject)`
4. Get the item using the getter method, again specifying the TypeScript type "T" for JSON deserialization using `getItem<T>('storage-key')`
