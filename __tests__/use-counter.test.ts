import { renderHook, act } from "@testing-library/react"
import { test, expect, describe } from "vitest"
import { useCounter } from "../hooks/counter"

describe("useCounter with default value (0)", () => {
     const { result } = renderHook(() => useCounter())
    test("should increment", () => {
        act(() => {
            result.current.increment()
        })
        expect(result.current.count).toBe(1)
    })
    test("should decrement", () => {

        act(() => {
            result.current.decrement()
        })
        expect(result.current.count).toBe(0)
    })
    test("if count is 0, should not decrement", () => {

        act(() => {
            result.current.decrement()
        })
        expect(result.current.count).toBe(0)
    })
})

describe("useCounter with default value (10)", () => {
    const { result } = renderHook(() => useCounter(10))
    test("value should be 10", () => {
        expect(result.current.count).toBe(10)
    })
    test("should increment to be 11", () => {
        act(() => {
            result.current.increment()
        })
        expect(result.current.count).toBe(11)
    })
    test("should decrement to be 10", () => {

        act(() => {
            result.current.decrement()
        })
        expect(result.current.count).toBe(10)
    })
})