# == Schema Information
#
# Table name: portfolios
#
#  id             :integer          not null, primary key
#  portfolio_name :string(255)
#  user_id        :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'spec_helper'

describe Portfolio do
  pending "add some examples to (or delete) #{__FILE__}"
end
