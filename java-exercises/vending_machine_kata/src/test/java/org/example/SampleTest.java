package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class SampleTest {

    @Test
    public void helloTest(){
        Main main = new Main();
        assertEquals(2, main.doMath(1,1));
    }
}
