package com.cardinalhealth.fuse.audition;

// by dustin bixler
public class Mystery2 {

    /**
     * What does this do?
     */

    public String my_mystery(String num) {
        return num.replaceAll("(\\d)(?=(\\d\\d\\d,?)+$)","$1,");
    }
}