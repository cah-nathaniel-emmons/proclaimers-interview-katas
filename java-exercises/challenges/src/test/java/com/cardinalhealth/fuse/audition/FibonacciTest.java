package com.cardinalhealth.fuse.audition;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 * f(45) = 1134903170
 * f(50) = 12586269025
 * f(55) = 139583862445
 * f(60) = 1548008755920
 */
public class FibonacciTest {

    @Test
    public void getZerothFibonacciNumber () {
        assertEquals(0, Fibonacci.getFibonacciNumber(0));
    }

    @Test
    public void getFirstFibonacciNumber() {
        assertEquals(1, Fibonacci.getFibonacciNumber(1));
    }

}
