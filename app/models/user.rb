class User < ApplicationRecord
  has_secure_password

  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :balance, presence: true, numericality: { greater_than_or_equal_to: 0 }

  def send_money!(email, amount)
    recipient = User.find_by_email!(email)

    # User.transaction do
    #   john.update!(money: john.money + 100)
    #   ted.update!(money: ted.money - 100)
    # end
    self
  end
end
