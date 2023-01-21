class InsertData:
  def __init__(self):
    self.boatrace_filed = []
    self.boatrace_filed_size = 0 
    self.tyaku = []
    self.price = []
    self.pop = []
  
  def set_boatrace_filed(self, boatrace_filed):
    self.boatrace_filed = boatrace_filed
  
  def clac_boatrace_filed_size(self):
    self.boatrace_filed_size = len(self.boatrace_filed)
  
  def get_boatrace_filed_size(self):
    return self.boatrace_filed_size
  
  def set_tyaku(self, tyaku):
    self.tyaku = tyaku
  
  def set_price(self, price):
    self.price = price
  
  def set_pop(self, pop):
    self.pop = pop
  
  # todo データの個数に異常がないかチェックする boatrace_filed_size*12R分 tyaku, price, popが存在するか
  def check(self):
    print(self.boatrace_filed)
    print(self.boatrace_filed_size)
    print(self.tyaku)
    print(self.price)
    print(self.pop)