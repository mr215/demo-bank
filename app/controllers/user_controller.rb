class UserController < ApplicationController
  before_action :authenticate_user

  def profile
    @user = current_user
  end

  def send_money
    validate_send_params
    
    @user = current_user.send_money!(send_params[:email], send_params[:amount])

    render :profile
  rescue => e
    render json: { error: e.to_s }, status: :bad_request
  end

  private
    def validate_send_params
      email = send_params[:email]
      amount = send_params[:amount]

      raise 'Invalid email' unless email =~ URI::MailTo::EMAIL_REGEXP
      raise 'Invalid amount' if (!amount.is_a? Numeric) || amount < 0
    end

    def send_params
      params.permit(:email, :amount)
    end
end
