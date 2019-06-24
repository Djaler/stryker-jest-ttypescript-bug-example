import { keys } from 'ts-transformer-keys';
import { someFunction, SomeInterface } from "@/index";

test('test', () => {
    const interfaceKeys = keys<SomeInterface>();

    console.log(interfaceKeys);

    someFunction({ field1: 'qwe', field2: 123 })
});
