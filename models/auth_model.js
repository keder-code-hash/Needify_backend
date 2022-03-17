/**
 * User : 
 *   user name
 *   first and last name
 *   address 
 *   phone no
 *   email
 *   password
 *   interests
 *   user_type
 *    - na
 *    - nu
 *    - nm
 * 
 * Permission :
 *   id
 *   user_type
 *   permission : []
 * 
 * NGO :
 *   id
 *   ngo_name
 *   ngo_reg_no
 *   registered_at
 *   phone_no
 *   email
 *   members :[{user:User},...]
 *   achievements : [{achievement_name : ,prize :},...]
 *   events : [{eventid,eventname,venue,event_details,event_date},...]
 * 
 * NGO_Requirements:
 *   req_id
 *   ngo_id
 *   requirement_issue:
 *   requirements_from
 *   requirements_to
 *   required_products : [{id: req_id+prod_id,prod_name: ,prod_quant: ,donated_by: [{ user: User, quantity : 4kg/4amnts}]},..]
 *   datetimestamp
 * 
 * 
 *   
 */

// https://kb.objectrocket.com/mongo-db/how-to-join-collections-using-mongoose-228


// export {Schema,Model}