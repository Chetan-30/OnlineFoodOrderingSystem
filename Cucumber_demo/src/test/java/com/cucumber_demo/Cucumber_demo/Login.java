package com.cucumber_demo.Cucumber_demo;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class Login {
	
		WebDriver driver = null;
		WebDriverWait w = null;
		@Given("Open FoodOrdering Website")
		public void open_foodordering_website() throws InterruptedException {
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\CHETAN\\Downloads\\chromedriver_win32\\chromedriver.exe");
			driver = new ChromeDriver();
			driver.get("http://localhost:3000/");
			driver.manage().window().maximize();
			Thread.sleep(5000);
		}

		@And("Create Account")
		public void create_account() throws InterruptedException{
		
			driver.findElement(By.xpath("//body/div[@id='root']/div[1]/div[4]/div[1]/div[1]/button[1]")).click();
			Thread.sleep(1000);
			driver.findElement(By.xpath("//input[@id='mobileno']")).sendKeys("1234567890");
			Thread.sleep(1000);
			driver.findElement(By.xpath("//input[@id='name']")).sendKeys("Chetan");
			Thread.sleep(1000);
			driver.findElement(By.xpath("//input[@id='email']")).sendKeys("user@gmail.com");
			Thread.sleep(1000);
			driver.findElement(By.xpath("//input[@id='password']")).sendKeys("password");
			Thread.sleep(1000);
			driver.findElement(By.xpath("//button[contains(text(),'Sign Up')]")).click();
			Thread.sleep(2000);
			driver.switchTo().alert().accept();
			Thread.sleep(3000);
		}
		@And("Login into account with incorrect credentials")
		public void login_into_account_with_incorrect_credentials() throws InterruptedException {
			
			driver.findElement(By.xpath("//body/div[@id='root']/div[1]/div[4]/div[1]/div[2]/button[1]")).click();
			Thread.sleep(1000);
			driver.findElement(By.xpath("//input[@id='mobileno']")).sendKeys("1234567890");
			Thread.sleep(1000);
			driver.findElement(By.xpath("//input[@id='password']")).sendKeys("wrongpassword");
			Thread.sleep(5000);
			driver.findElement(By.xpath("//button[contains(text(),'Log In')]")).click();
			Thread.sleep(2000);
			driver.switchTo().alert().accept();
			Thread.sleep(3000);
		}


		
		@Then("Login with correct credentials")
		public void login_with_correct_credentials() throws InterruptedException{
			driver.findElement(By.xpath("//body/div[@id='root']/div[1]/div[4]/div[1]/div[2]/button[1]")).click();
			Thread.sleep(1000);
			driver.findElement(By.xpath("//input[@id='mobileno']")).sendKeys("1234567890");
			Thread.sleep(1000);
			driver.findElement(By.xpath("//input[@id='password']")).sendKeys("password");
			Thread.sleep(5000);
			driver.findElement(By.xpath("//button[contains(text(),'Log In')]")).click();
			Thread.sleep(2000);
			driver.switchTo().alert().accept();
			Thread.sleep(3000);
			driver.close();
		}
}
