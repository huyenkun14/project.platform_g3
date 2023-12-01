package com.example.moneytrackerbackend.utils;

import java.util.Arrays;
import java.util.List;

public class ColorUtil {

    private static final List<String> COLORS = Arrays.asList(

           "#BFAEE3", "#FEC5E6", "#B8E7EA", "#6C7EE1", "#BD637E",
            "#6A9CFD", "#407F3E", "#8C54FD", "#OE686D", "#OC926F",
            "#60B25A", "#1B559E", "#OF89C2", "#E4C3OC", "#EB8136",
            "#E75F49", "#DO3F6D", "#A7488E", "#AE65B4", "#A47FC6",
            "#7D86C3", "#6995C8", "#766488", "#465389", "#EFC8BE",
            "#FOD5BC", "#F6D993", "#9F6D45", "#EEAD9E", "#EBA624",
            "#C96645", "#EC8E2B", "#A8CEE0", "#50464E", "#AFB164"
    );

    public static String getColorByIndex(int index) {
        return COLORS.get(index % COLORS.size());
    }
}

