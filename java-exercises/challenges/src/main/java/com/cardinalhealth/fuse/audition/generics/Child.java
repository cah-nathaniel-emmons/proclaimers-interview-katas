package com.cardinalhealth.fuse.audition.generics;

public interface Child<C extends Child<C, P>, P extends Parent<P, C>> {
}
