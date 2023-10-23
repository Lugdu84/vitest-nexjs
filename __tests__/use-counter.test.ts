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
    const { result } = renderHook(() => useCounter({ initialCount: 10 }))
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

describe("useCounter with initialValue(1) step (3)", () => {
    const { result } = renderHook(() => useCounter({initialCount: 1, initialStep: 3 }))
    test("value should be 1", () => {
        expect(result.current.count).toBe(1)
    })
    test("should increment to be 4", () => {
        act(() => {
            result.current.increment()
        })
        expect(result.current.count).toBe(4)
    })
    test("should increment to be 7", () => {
        act(() => {
            result.current.increment()
        })
        expect(result.current.count).toBe(7)
    })
    test("should decrement to be 4", () => {

        act(() => {
            result.current.decrement()
        })
        expect(result.current.count).toBe(4)
    })
    test("should decrement to be 1", () => {

        act(() => {
            result.current.decrement()
        })
        expect(result.current.count).toBe(1)
    })
    test("if count is 1, should not decrement", () => {

        act(() => {
            result.current.decrement()
        })
        expect(result.current.count).toBe(0)
    })
})

describe("change step", () => {
    const { result } = renderHook(() => useCounter())
    test("step should be 2 with number parameter 2", () => {
        act(() => {
            result.current.updateStep(2)
        })
        expect(result.current.step).toBe(2)
    })
    test("step should be 1 with string parameter 1", () => {
        act(() => {
            result.current.updateStep(1)
        })
        expect(result.current.step).toBe(1)
    })
})