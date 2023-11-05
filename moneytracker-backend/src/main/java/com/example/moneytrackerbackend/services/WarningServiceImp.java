package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.entities.Budget;
import com.example.moneytrackerbackend.entities.Category;
import com.example.moneytrackerbackend.entities.Transaction;
import com.example.moneytrackerbackend.entities.Warning;
import com.example.moneytrackerbackend.exceptiones.CustomException;
import com.example.moneytrackerbackend.repositories.BudgetRepository;
import com.example.moneytrackerbackend.repositories.TransactionRepository;
import com.example.moneytrackerbackend.repositories.WarningRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import static com.example.moneytrackerbackend.utils.FormatMoneyUtil.formatMoney;

@Service
@RequiredArgsConstructor
public class WarningServiceImp implements WarningService{
    private final TransactionRepository transactionRepository;
    private final WarningRepository warningRepository;
    private final BudgetRepository budgetRepository;

    public int checkBudget(Long categoryId, LocalDate date){
        int sumAmount = transactionRepository.sumAmountByCategory(categoryId, date.getMonthValue(), date.getYear());
        Budget budget = budgetRepository.findByCategoryId(categoryId, date.getMonthValue(), date.getYear());
        if(budget!=null && budget.getAmount()>0){
            return budget.getAmount() - sumAmount;
        }
        else return 0;
    }

    public Warning createWarning(Long transactionId, int amount){

        Transaction transaction = transactionRepository.findById(transactionId).orElseThrow(()-> new CustomException("Error: no transaction."));
        Category category = transaction.getCategory();
        String content = "Chi tiêu của bạn cho " + category.getTitle() + " đã vượt mức ngân sách là " + formatMoney(amount) + ".";

        Warning warning = Warning.builder()
                .user(transaction.getCategory().getUser())
                .message(content)
                .date(LocalDateTime.now())
                .build();
        return warningRepository.save(warning);
    }
    public List<Warning> getAllWarning(Long userId){
        return warningRepository.findAllByUserIdOrderByDateDesc(userId);
    }
}
