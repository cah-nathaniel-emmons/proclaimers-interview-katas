package com.cardinalhealth.fuse.audition.generics;

public interface Parent<P extends Parent<P, C>, C extends Child<C, P>> {
}
