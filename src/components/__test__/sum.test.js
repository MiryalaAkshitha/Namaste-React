import { Sum } from "../Sum";

test("add to numbers",()=>{
    const result = Sum(5,2)
    expect(result).toBe(7)
})