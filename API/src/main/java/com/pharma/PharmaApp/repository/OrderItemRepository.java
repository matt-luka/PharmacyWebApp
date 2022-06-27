package com.pharma.PharmaApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pharma.PharmaApp.models.OrderItem;

import java.util.List;

/**
 * 
 * Repository for the OrderItem model
 * 
 * @author Matthew Luka & Candice Fan
 *
 */
@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {
	
	/**
	 * 
	 * Finds an OrderItem object given an ID
	 * 
	 * @param id Querying ID
	 * @return Associated OrderItem
	 */
    @Modifying
    @Query(value = "select  t from OrderItem  t where t.order.id=:id ")
    List<OrderItem> queryList(@Param("id") Integer id);
}
