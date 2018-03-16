package sea;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity // This tells Hibernate to make a table out of this class
public class Event {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="ID")
    private Integer id;

    private String name;
    
    @ManyToMany(cascade=CascadeType.ALL)
    @JoinTable(
        name="USERS_EVENTS",
        joinColumns=@JoinColumn(name="EVENT_ID", referencedColumnName="ID"),
        inverseJoinColumns=@JoinColumn(name="USER_ID", referencedColumnName="ID"))
    @JsonIgnoreProperties("events")
    private List<User> users;
   

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public void addUser(User u){
		if(users == null)users = new ArrayList<User>();
		users.add(u);
	}
	
	
    public List<User> getUsers() { return users; }
    
    public void clearUsers(){
    	this.users.clear();
    }



}