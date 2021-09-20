from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities


class craigslist_crawler(object):
    def_init_(self,query,max_price):
    self.max_price = max_price
    self.query =query
    self.url=f"https://seoul.craigslist.org/search/sss?query={query}&sort=rel&purveyor-input=all&min_price={max_price}"

query = cup
max_price =400
crawler = craigslist_crawler(query,max_price)