package com.cardinalhealth.fuse.audition;


import org.junit.Test;

import java.util.Collection;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class CollectionCreatorTest {

    @Test
    public void testGetCollectionThatMaintainsSequence() {
        Collection c = CollectionCreator.getCollectionThatMaintainsSequence();

        assertNotNull(c);

        String value1 = "value1";
        String value2 = "value2";
        String value3 = "value3";

        c.add(value1);
        c.add(value2);
        c.add(value3);

        assertEquals(value1, c.toArray()[0]);
        assertEquals(value2, c.toArray()[1]);
        assertEquals(value3, c.toArray()[2]);
    }

    @Test
    public void testCollectionThatEnforcesUniqueness() {
        Collection c = CollectionCreator.getCollectionThatEnforcesUniqueness();

        assertNotNull(c);

        String value1 = "value1";
        String value2 = "value2";
        String value3 = "value3";

        c.add(value1);
        c.add(value2);
        c.add(value3);
        c.add(value3);

        assertEquals(3, c.size());
    }
}
