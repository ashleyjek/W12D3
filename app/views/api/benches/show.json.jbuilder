json.bench do
    json.extract! @bench, :id, :title, :description, :price, :seating, :lat, :lng
  end