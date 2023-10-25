package com.example.moneytrackerbackend.utils;

import java.util.Arrays;
import java.util.List;

public class ColorUtil {

    private static final List<String> COLORS = Arrays.asList(
            "#103667", "#184785", "#1B4F93", "#205AA7", "#426EB4",
            "#7388C1", "#94AAD6", "#BFCAE6"
    );

    public static String getColorByIndex(int index) {
        return COLORS.get(index % COLORS.size());
    }
}

