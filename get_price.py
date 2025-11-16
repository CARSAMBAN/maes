from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
import json, time

options = Options()
options.add_argument("--headless")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")
from flask import Flask, jsonify
import subprocess

#SAMSUNG A07 için fiyatları çekme---------------------------------------------------------------------------------------------------------------------
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

url = "https://www.vodafone.com.tr/faturaya-ek/samsung-galaxy-a07/p/ayin-firsatlari"
driver.get(url)
time.sleep(5)

elements = driver.find_elements(By.XPATH, "//*[contains(text(),'₺') or contains(text(),'TL')]")
prices = [el.text.strip() for el in elements if el.text.strip()]

driver.quit()

# fiyatları kaydet
with open("samsunga07.json", "w", encoding="utf-8") as f:
    json.dump(prices, f, ensure_ascii=False, indent=2)

print("✅ fiyat.json dosyası oluşturuldu!")

#SAMSUNG A15 için fiyatları çekme---------------------------------------------------------------------------------------------------------------------
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

url = "https://www.vodafone.com.tr/faturaya-ek/samsung-galaxy-a15-6gb/p/ayin-firsatlaris"
driver.get(url)
time.sleep(5)

elements = driver.find_elements(By.XPATH, "//*[contains(text(),'₺') or contains(text(),'TL')]")
prices = [el.text.strip() for el in elements if el.text.strip()]

driver.quit()

# fiyatları kaydet
with open("samsunga15.json", "w", encoding="utf-8") as f:
    json.dump(prices, f, ensure_ascii=False, indent=2)

print("✅ fiyat.json dosyası oluşturuldu!")

#SAMSUNG A16 için fiyatları çekme---------------------------------------------------------------------------------------------------------------

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

url = "https://www.vodafone.com.tr/faturaya-ek/samsung-galaxy-a16-8gb/p/ayin-firsatlari"
driver.get(url)
time.sleep(10)

elements = driver.find_elements(By.XPATH, "//*[contains(text(),'₺') or contains(text(),'TL')]")
prices = [el.text.strip() for el in elements if el.text.strip()]

driver.quit()

# fiyatları kaydet
with open("samsunga16.json", "w", encoding="utf-8") as f:
    json.dump(prices, f, ensure_ascii=False, indent=2)

print("✅ fiyat.json dosyası oluşturuldu!")


#SAMSUNG A16 5G için fiyatları çekme----------------------------------------------------------------------------------------------------------------
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

url = "http://vodafone.com.tr/faturaya-ek/samsung-galaxy-a16-5g/p/telefonlar"
driver.get(url)
time.sleep(5)

elements = driver.find_elements(By.XPATH, "//*[contains(text(),'₺') or contains(text(),'TL')]")
prices = [el.text.strip() for el in elements if el.text.strip()]

driver.quit()

# fiyatları kaydet
with open("samsunga165g.json", "w", encoding="utf-8") as f:
    json.dump(prices, f, ensure_ascii=False, indent=2)

print("✅ fiyat.json dosyası oluşturuldu!")

#SAMSUNG A36 5G için fiyatları çekme----------------------------------------------------------------------------------------------------------------
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

url = "https://www.vodafone.com.tr/faturaya-ek/samsung-galaxy-a36-5g/p/ayin-firsatlari"
driver.get(url)
time.sleep(5)

elements = driver.find_elements(By.XPATH, "//*[contains(text(),'₺') or contains(text(),'TL')]")
prices = [el.text.strip() for el in elements if el.text.strip()]

driver.quit()

# fiyatları kaydet
with open("samsunga365g.json", "w", encoding="utf-8") as f:
    json.dump(prices, f, ensure_ascii=False, indent=2)

print("✅ fiyat.json dosyası oluşturuldu!")
