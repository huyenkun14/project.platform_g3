package com.example.moneytrackerbackend.utils;

import java.text.NumberFormat;
import java.util.Locale;

public class FormatMoneyUtil {
    public static String formatMoney(int amount) {

        Locale localeVN = new Locale("vi", "VN");
        NumberFormat currencyFormatVN = NumberFormat.getCurrencyInstance(localeVN);

        return currencyFormatVN.format(Math.abs(amount));
    }
}
