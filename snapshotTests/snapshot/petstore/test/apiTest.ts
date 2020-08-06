/* eslint @typescript-eslint/no-unused-vars: off */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key \"special-key\" to test the authorization filters
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    CategoryDto,
    InlineObject1Dto,
    InlineObjectDto,
    OrderDto,
    PetDto,
    TagDto,
    UserDto,
} from "../model";

import {
    ApplicationApis,
    PetApiInterface,
    StoreApiInterface,
    UserApiInterface,
} from "../api";

function reject(operation: string) {
    return () => Promise.reject(new Error("Unexpected function call " + operation));
}

export function mockApplicationApis({
    petApi = mockPetApi(),
    storeApi = mockStoreApi(),
    userApi = mockUserApi(),
}: Partial<ApplicationApis>): ApplicationApis {
    return { petApi, storeApi, userApi };
}

export function mockPetApi(operations: {
    addPet?: () => Promise<void>;
    deletePet?: () => Promise<void>;
    findPetsByStatus?: () => Promise<Array<PetDto>>;
    findPetsByTags?: () => Promise<Array<PetDto>>;
    getPetById?: () => Promise<PetDto>;
    updatePet?: () => Promise<void>;
    updatePetWithForm?: () => Promise<void>;
    uploadFile?: () => Promise<void>;
} = {}): PetApiInterface {
    return {
        addPet: operations.addPet || reject("PetApi.addPet"),
        deletePet: operations.deletePet || reject("PetApi.deletePet"),
        findPetsByStatus: operations.findPetsByStatus || reject("PetApi.findPetsByStatus"),
        findPetsByTags: operations.findPetsByTags || reject("PetApi.findPetsByTags"),
        getPetById: operations.getPetById || reject("PetApi.getPetById"),
        updatePet: operations.updatePet || reject("PetApi.updatePet"),
        updatePetWithForm: operations.updatePetWithForm || reject("PetApi.updatePetWithForm"),
        uploadFile: operations.uploadFile || reject("PetApi.uploadFile"),
    };
}

export function mockStoreApi(operations: {
    deleteOrder?: () => Promise<void>;
    getInventory?: () => Promise<{ [key: string]: number; }>;
    getOrderById?: () => Promise<OrderDto>;
    placeOrder?: () => Promise<OrderDto>;
} = {}): StoreApiInterface {
    return {
        deleteOrder: operations.deleteOrder || reject("StoreApi.deleteOrder"),
        getInventory: operations.getInventory || reject("StoreApi.getInventory"),
        getOrderById: operations.getOrderById || reject("StoreApi.getOrderById"),
        placeOrder: operations.placeOrder || reject("StoreApi.placeOrder"),
    };
}

export function mockUserApi(operations: {
    createUser?: () => Promise<void>;
    createUsersWithArrayInput?: () => Promise<void>;
    createUsersWithListInput?: () => Promise<void>;
    deleteUser?: () => Promise<void>;
    getUserByName?: () => Promise<UserDto>;
    loginUser?: () => Promise<string>;
    logoutUser?: () => Promise<void>;
    updateUser?: () => Promise<void>;
} = {}): UserApiInterface {
    return {
        createUser: operations.createUser || reject("UserApi.createUser"),
        createUsersWithArrayInput: operations.createUsersWithArrayInput || reject("UserApi.createUsersWithArrayInput"),
        createUsersWithListInput: operations.createUsersWithListInput || reject("UserApi.createUsersWithListInput"),
        deleteUser: operations.deleteUser || reject("UserApi.deleteUser"),
        getUserByName: operations.getUserByName || reject("UserApi.getUserByName"),
        loginUser: operations.loginUser || reject("UserApi.loginUser"),
        logoutUser: operations.logoutUser || reject("UserApi.logoutUser"),
        updateUser: operations.updateUser || reject("UserApi.updateUser"),
    };
}