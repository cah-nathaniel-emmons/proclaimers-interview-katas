package com.cardinalhealth.fuse.audition;

/**
 * Class AlphaNum is meant to compare integers or strings such that integers
 * always compare less than strings; integers compare to integers numerically;
 * and strings compare to strings lexically.
 * 
 * Consider the implementation of Comparable<AlphaNum>. What pattern is being
 * used? Rewrite the Comparable implementation without this pattern. For
 * example, try implementing a compareTo in the base class.
 * 
 * Hint: why can't the existing (and seemingly identical) compareTo methods in
 * the concrete classes be refactored into the base class?
 */
public abstract class AlphaNum implements Comparable<AlphaNum> {

    public static AlphaNum instance(String stringValue) {
        try {
            return new Num(Integer.parseInt(stringValue));
        } catch (NumberFormatException nfe) {
            return new Alpha(stringValue);
        }
    }

    private final Object rawValue;

    protected AlphaNum(Object rawValue) {
        if (rawValue == null)
            throw new IllegalArgumentException("null value");
        this.rawValue = rawValue;
    }

    public abstract int comparedBy(Alpha that);

    public abstract int comparedBy(Num that);

    @Override
    public int hashCode() {
        return rawValue.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof AlphaNum)) {
            return false;
        } else {
            AlphaNum that = (AlphaNum) obj;
            return ((that == this) || that.rawValue.equals(rawValue));
        }
    }

    @Override
    public String toString() {
        return rawValue.toString();
    }

    public final static class Alpha extends AlphaNum {

        public final String value;

        public Alpha(String value) {
            super(value);
            this.value = value;
        }

        public int compareTo(AlphaNum that) {
            return that.comparedBy(this);
        }

        @Override
        public int comparedBy(Alpha that) {
            return that.value.compareTo(value);
        }

        @Override
        public int comparedBy(Num that) {
            return -1;
        }
    }

    public final static class Num extends AlphaNum {

        public final int value;

        public Num(int value) {
            super(value);
            this.value = value;
        }

        public int compareTo(AlphaNum that) {
            return that.comparedBy(this);
        }

        @Override
        public int comparedBy(Alpha that) {
            return 1;
        }

        @Override
        public int comparedBy(Num that) {
            return that.value - value;
        }
    }
}
