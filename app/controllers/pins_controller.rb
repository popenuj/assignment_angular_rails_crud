class PinsController < ApplicationController

  before_action :set_pin, only: [:show]

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


  private

  def set_pin
    @pin = Pin.find(params[:id])
  end

end
