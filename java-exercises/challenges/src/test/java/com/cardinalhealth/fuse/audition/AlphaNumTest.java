package com.cardinalhealth.fuse.audition;

import org.junit.Test;
import static org.junit.Assert.assertTrue;

public class AlphaNumTest {

    @Test
    public void testComparable() {
        AlphaNum[] testVector = new AlphaNum[] { AlphaNum.instance("3"), AlphaNum.instance("20"), AlphaNum.instance("!"),
                AlphaNum.instance("abc"), AlphaNum.instance("xyz") };
        for (int i = 0; i < testVector.length; i++) {
            AlphaNum ani = testVector[i];
            for (int j = 0; j < i; j++) {
                AlphaNum anj = testVector[j];
                assertTrue(anj + " < " + ani, (anj.compareTo(ani) < 0));
            }
            assertTrue(ani + " == " + ani, (ani.compareTo(ani) == 0));
        }
    }
}
