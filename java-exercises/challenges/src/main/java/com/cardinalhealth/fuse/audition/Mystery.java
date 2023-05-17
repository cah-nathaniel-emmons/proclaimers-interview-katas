package com.cardinalhealth.fuse.audition;

public class Mystery {

    /**
     * Read the following code and:
     * <p/>
     * a) Explain what the code is supposed to do.
     * b) Write a Junit test case to prove it.
     * c) If there are errors, explain them & propose/provide a solution.
     */

    public String mystery(String num) {
        if (num == null) {
            return "N/A";
        }
        int len = num.length();
        int c = 0;
        char[] sb = new char[len];
        for (int i = 0; i < len; i++) {
            sb[c++] = num.charAt(i);
            if ((len - 1 - i) % 3 == 0 && i != len - 1) {
                sb[c++] = ',';
            }
        }
        return new String(sb);
    }
}