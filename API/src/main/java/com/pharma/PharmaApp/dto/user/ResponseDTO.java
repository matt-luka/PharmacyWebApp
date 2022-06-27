package com.pharma.PharmaApp.dto.user;

/**
 * 
 * Data transfer object for registration response
 * 
 * @author Matthew Luka
 *
 */
public class ResponseDTO {

	private String status;
	private String msg;
	
	/**
	 * 
	 * Default constructor for ResponseDTO
	 * 
	 * @param status Set status
	 * @param msg Set message
	 */
	public ResponseDTO(String status, String msg) {
		this.status = status;
		this.msg = msg;
	}
	
	/**
	 * 
	 * Getter for message field
	 * 
	 * @return Current message
	 */
	public String getMsg() {
		return this.msg;
	}
	
	/**
	 * 
	 * Setter for message field
	 * 
	 * @param msg Desired message
	 */
	public void setMsg(String msg) {
		this.msg = msg;
		return;
	}
	
	/**
	 * 
	 * Getter for status field
	 * 
	 * @return Current status
	 */
	public String getStat() {
		return this.status;
	}
	
	/**
	 * 
	 * Setter for status field
	 * 
	 * @param status Desired status
	 */
	public void setStat(String status) {
		this.status = status;
		return;
	}
}
