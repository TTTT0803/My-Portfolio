import { Container, Row, Col } from "react-bootstrap";

export const Blog = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Hướng dẫn kết nối Spring MVC trong IntelliJ và Maven</h2>
          <h4>1. Thêm dependency cho MySQL vào `pom.xml`</h4>
          <pre>
            {`
<dependency>
  <groupId>mysql</groupId>
  <artifactId>mysql-connector-java</artifactId>
  <version>8.0.33</version> <!-- Thay phiên bản phù hợp -->
</dependency>
            `}
          </pre>
          <h4>2. Chạy lệnh Maven:</h4>
          <pre>
            {`
mvn install
            `}
          </pre>
          <h4>3. Tạo file `DBConfig.properties` trong thư mục `resources`:</h4>
          <pre>
            {`
driver=com.mysql.cj.jdbc.Driver
server=jdbc:mysql://localhost:3306
dbname=JNWEBML101_SMS
username=root
password=
            `}
          </pre>
          <h4>4. Tạo class `UserDAO` để kết nối CSDL:</h4>
          <pre>
            {`
import fa.training.utils.DBConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class UserDAO {
    private Connection conn = DBConnection.getConnection();

    public void testConnection() {
        try {
            PreparedStatement ps = conn.prepareStatement("SELECT 1");
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                System.out.println("Kết nối thành công!");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        UserDAO userDAO = new UserDAO();
        userDAO.testConnection();
    }
}
            `}
          </pre>
          <h4>5. Thêm dependency Jakarta Servlet vào `pom.xml`:</h4>
          <pre>
            {`
<dependency>
  <groupId>jakarta.servlet</groupId>
  <artifactId>jakarta.servlet-api</artifactId>
  <version>5.0.0</version>
  <scope>provided</scope>
</dependency>
            `}
          </pre>
          <h4>6. Cấu hình Maven Compiler:</h4>
          <pre>
            {`
<properties>
  <maven.compiler.source>17</maven.compiler.source>
  <maven.compiler.target>17</maven.compiler.target>
</properties>

<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-compiler-plugin</artifactId>
      <version>3.8.1</version>
      <configuration>
        <source>17</source>
        <target>17</target>
      </configuration>
    </plugin>
  </plugins>
  <finalName>JWEB</finalName>
</build>
            `}
          </pre>
          <h4>7. Build và chạy dự án:</h4>
          <pre>
            {`
mvn clean install
mvn clean compile
// Nếu vẫn lỗi:
mvn clean package
            `}
          </pre>
        </Col>
      </Row>
    </Container>
  );
};
