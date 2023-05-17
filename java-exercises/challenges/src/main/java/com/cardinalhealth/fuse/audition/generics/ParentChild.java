package com.cardinalhealth.fuse.audition.generics;

/**
 * Explain this type signature. Consider the classes Database, Catalog, Schema,
 * and Table, what changes have to be made to remove Catalog and add a new class
 * Column as a child of Table?
 */
public interface ParentChild<M extends ParentChild<M, P, C>, P extends Parent<P, M>, C extends Child<C, M>> extends Parent<M, C>,
        Child<M, P> {
}
