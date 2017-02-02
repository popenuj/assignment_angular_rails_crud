class PinsController < ApplicationController

  before_action :set_pin, only: [:show, :destroy]

  def index
    @pins = Pin.all
    respond_to do |format|
      format.json { render json: @pins.to_json(include: :user) }
    end
  end

  def show
    respond_to do |format|
      format.json { render json: @pin.to_json(include: :user) }
    end
  end

  def create
    @pin = current_user.pins.build(pin_params)
    if @pin.save
      respond_to do |format|
        format.json { render json: @pin }
      end
    else
      respond_to do |format|
        format.json {render json: { errors:  @pin.errors.full_messages }}
      end
    end
  end

  def destroy
    @pin.delete
    respond_to do |format|
      format.json { render json: @pin }
    end
  end


  private

  def set_pin
    @pin = Pin.find(params[:id])
  end

  def pin_params
    params.require(:pin).permit(:item_name, :description, :buy_or_sell)
  end

end
