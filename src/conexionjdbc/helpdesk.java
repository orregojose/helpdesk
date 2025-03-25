/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package conexionjdbc;

/**
 *
 * @author JoseOrrego
 */
import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class helpdesk {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        String usuario = "administrador";
        String password = "Colombia2030*.";
        String url = "jdbc:mysql://localhost:3306/helpdesk";
        Connection conexion;
        Statement statement;
        ResultSet rs;

        
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            // TODO code application logic here
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(helpdesk.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        try {
            conexion = DriverManager.getConnection(url, usuario, password);
            statement = conexion.createStatement();
            
            // Insertar un registro
            statement.executeUpdate("INSERT INTO USUARIOS(username, name, password) VALUES('JORREGO', 'Jose Orrego', '12345')");
            System.out.println("Registro insertado : Jose Orrego, 12345");
        
            rs = statement.executeQuery("SELECT * FROM USUARIOS");
            while (rs.next()) {
            System.out.println(rs.getInt("userid") + " : " + rs.getString("username") + " : " + rs.getString("name")+ " : " + rs.getString("password"));}
                        
            // Actualizar un registro
            String updateQuery = "UPDATE USUARIOS SET password='87654321' WHERE username='JORREGO'";
            statement.executeUpdate(updateQuery);
            System.out.println("\nRegistro actualizado : Jose Orrego, nueva clave 87654321\n");
            
            rs = statement.executeQuery("SELECT * FROM USUARIOS");
            while (rs.next()) {         
            System.out.println(rs.getInt("userid") + " : " + rs.getString("username") + " : " + rs.getString("name")+ " : " + rs.getString("password"));}
               
            // Eliminar un registro
            String deleteQuery = "DELETE FROM USUARIOS WHERE username='JORREGO'";
            statement.executeUpdate(deleteQuery);
            System.out.println("\nRegistro Eliminado : JORREGO\n");
            
            //mostrar registros
            rs = statement.executeQuery("SELECT * FROM USUARIOS");
            while (rs.next()) {         
            System.out.println(rs.getInt("userid") + " : " + rs.getString("username") + " : " + rs.getString("name")+ " : " + rs.getString("password"));}
            
          
            
    } catch (SQLException ex) {
            Logger.getLogger(helpdesk.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
}
