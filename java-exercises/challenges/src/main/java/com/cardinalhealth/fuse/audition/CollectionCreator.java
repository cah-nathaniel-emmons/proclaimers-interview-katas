package com.cardinalhealth.fuse.audition;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;

/**
 * Simple class, that when implemented, should return two different types of Collection objects.  One
 * Collection should maintain element sequence after they are added to the Collection.  The other Collection
 * should enforce uniqueness across elements.
 */
public class CollectionCreator {


    public static Collection getCollectionThatMaintainsSequence() {
        return new ArrayList();
    }

    public static Collection getCollectionThatEnforcesUniqueness() {
        return new HashSet();
    }
}